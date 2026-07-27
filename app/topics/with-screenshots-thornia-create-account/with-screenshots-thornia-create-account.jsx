import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thornia-create-account');
}

export default function WithScreenshotsThorniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thornia-create-account" />;
}
