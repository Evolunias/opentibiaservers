import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-neprenia-create-account');
}

export default function WithScreenshotsNepreniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-neprenia-create-account" />;
}
