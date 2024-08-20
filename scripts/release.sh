current_version=$(node -p "require(./package.json).version")
echo "Current version: $current_version"

new_version=${npm version --no-git-tag-version patch}
echo "New version: $new_version"

$(pnpm run build)

$(pnpm publish --access public)

git add .
git commit -m "RELEASE (serif) : new release $new_version"
git push origin depl

echo "Released $new_version"
