FROM golang:1.24-alpine AS build
WORKDIR /usr/src/app
COPY go.mod ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o /usr/local/bin/app ./...

CMD ["app"]

FROM scratch
COPY --from=build /usr/local/bin/app /usr/local/bin/app

CMD ["/usr/local/bin/app"]


