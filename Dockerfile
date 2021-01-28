FROM alpine:latest

RUN apk add --no-cache \
    bash \
    ca-certificates \
    jq \
    git

COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]