import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiascape-create-account');
}

export default function WithScreenshotsTibiascapeCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiascape-create-account" />;
}
