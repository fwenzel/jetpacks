# Not an executable so it keeps the same python environment.

ROOT="gh-pages"

./builder.py

for f in $(ack -f | ack -v gh-pages); do
    D="$ROOT/$(dirname $f)" && mkdir -p $D && cp $f $D
done

cp -r media $ROOT
