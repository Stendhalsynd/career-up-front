import { copy } from 'fs-extra'

const libraryPath = '../library/src/lib/'

async function copyFiles() {
  try {
    await copy('./src/components/', libraryPath + 'components')
    await copy('./src/layout/', libraryPath + 'layout')
    await copy('./src/models/', libraryPath + 'models')
  } catch (err) {
    console.error('Error executing copy function in library-copy.js', err)
  }
}

copyFiles()
