import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nto-star-create-account');
}

export default function WithScreenshotsNtoStarCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nto-star-create-account" />;
}
