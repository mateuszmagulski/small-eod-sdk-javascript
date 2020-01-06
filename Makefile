spec_url = https://raw.githubusercontent.com/watchdogpolska/small_eod/master/docs/swagger.yaml

.PHONY: build test

config-help:
	docker run openapitools/openapi-generator-cli config-help -g javascript

build:
	curl -s $(spec_url) | docker run -i dotlou/yq '.' > swagger.json
	docker run --user $(id -u):$(id -g) --rm \
	-v $$(pwd)/swagger.json:/openapi.json -v $$(pwd):/out \
	-e JS_POST_PROCESS_FILE="/usr/local/bin/js-beautify -r -f" \
	openapitools/openapi-generator-cli \
	generate \
	--git-user-id "watchdogpolska" \
	--git-repo-id "small-eod-sdk-javascript" \
	--release-note "Github integration demo" \
	-g javascript \
	-i /openapi.json \
	-c /out/config.yml \
	-o /out
	rm swagger.json

test:
	docker build -t sdk-javascript .
	docker run sdk-javascript