# NOTE: 'npx' 실행시 '환경변수상속'을 위해서 'export' 사용함.
export NODE_ENV=$1

if [ -z "${NODE_ENV}" ]; then
  echo "Error: No environment specified. Please specify 'dev' or 'dist'."
  exit 1
fi

BUILD_DIR="../../build/${NODE_ENV}/vendor/monaco-editor"
DEST_DIR="../../vendor/monaco-editor/dist-bundle"

printf "Running rollup..."
npx rollup --config rollup.monaco-editor.config.js
echo "done."

if [ -d "${BUILD_DIR}" ]; then
  printf "Removing existing destination directory..."
  rm -rf ${DEST_DIR}
  echo "done."

  printf "Copying build directory to destination..."
  cp -r ${BUILD_DIR} ${DEST_DIR}
  echo "done."

  if [ "${NODE_ENV}" = "dist" ]; then
    printf "Copying monaco-editor-small-python.css to destination..."
    cp ${BUILD_DIR}/monaco-editor-small-python.css ../../pages/docroot/resources/monaco-editor
    echo "done."
  fi
else
  echo "Error: Build directory ${BUILD_DIR} does not exist."
  exit 1
fi
