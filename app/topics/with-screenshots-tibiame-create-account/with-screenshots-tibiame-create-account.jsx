import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiame-create-account');
}

export default function WithScreenshotsTibiameCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiame-create-account" />;
}
