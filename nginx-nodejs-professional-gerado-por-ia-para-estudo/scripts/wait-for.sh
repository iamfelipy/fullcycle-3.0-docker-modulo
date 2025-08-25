#!/bin/bash
# wait-for.sh - Wait for a service to be ready

set -e

host="$1"
shift
cmd="$@"

until nc -z "$host" "${host#*:}"; do
  >&2 echo "Service $host is unavailable - sleeping"
  sleep 1
done

>&2 echo "Service $host is up - executing command"
exec $cmd
