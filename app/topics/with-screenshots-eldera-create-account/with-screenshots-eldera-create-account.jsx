import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-eldera-create-account');
}

export default function WithScreenshotsElderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-eldera-create-account" />;
}
