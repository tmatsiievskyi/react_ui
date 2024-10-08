current_version=$(node -p "require('./package.json').version")
echo "Current version: $current_version"

new_version=$(pnpm version --no-git-tag-version patch)
echo "New version: $new_version"

# $(npm run build)

# $(npm run build-tailwind)

# sleep 10

$(npm publish)

git add .
git commit -m "RELEASE (serif) : new release $new_version"
git push origin master

echo "Released $new_version"
