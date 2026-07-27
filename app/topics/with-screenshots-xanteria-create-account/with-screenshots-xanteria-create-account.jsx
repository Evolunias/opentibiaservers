import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-xanteria-create-account');
}

export default function WithScreenshotsXanteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-xanteria-create-account" />;
}
