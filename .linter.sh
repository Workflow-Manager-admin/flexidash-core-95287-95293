#!/bin/bash
cd /home/kavia/workspace/code-generation/flexidash-core-95287-95293/main_container_for_flexidash_core
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

