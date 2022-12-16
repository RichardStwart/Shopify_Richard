#!/usr/bin/env node

const fs = require("fs/promises")
const path = require("path")
const execa = require("execa")
const yaml = require("js-yaml")

const basePath = path.resolve(__dirname, `../`)

const run = async () => {
  await generateOASSource()

  for (const apiType of ["store", "admin"]) {
    const inputJsonFile = path.resolve(
      basePath,
      `packages/medusa/dist/oas/${apiType}.oas.json`
    )
    const outputJsonFile = path.resolve(
      basePath,
      `docs/api/${apiType}-spec3.json`
    )
    const outputYamlFile = path.resolve(
      basePath,
      `docs/api/${apiType}-spec3.yaml`
    )

    await fs.copyFile(inputJsonFile, outputJsonFile)
    await jsonFileToYamlFile(inputJsonFile, outputYamlFile)
    await generateReference(apiType)
  }
}

const generateOASSource = async () => {
  const { all: logs } = await execa("yarn", ["build:oas", "--verbose"], {
    cwd: path.resolve(basePath, "packages/medusa"),
    all: true,
  })
  console.log(logs)
}

const jsonFileToYamlFile = async (inputJsonFile, outputYamlFile) => {
  const jsonString = await fs.readFile(inputJsonFile, "utf8")
  const jsonObject = JSON.parse(jsonString)
  const yamlString = yaml.dump(jsonObject)
  await fs.writeFile(outputYamlFile, yamlString, "utf8")
}

const generateReference = async (apiType) => {
  const srcFile = path.resolve(basePath, `docs/api/${apiType}-spec3.yaml`)
  const outDir = path.resolve(basePath, `docs/api/${apiType}`)
  await fs.rm(outDir, { recursive: true, force: true })
  const { all: logs } = await execa(
    "redocly",
    ["split", srcFile, `--outDir=${outDir}`],
    { cwd: basePath, all: true }
  )
  console.log(logs)
}

void (async () => {
  await run()
})()
