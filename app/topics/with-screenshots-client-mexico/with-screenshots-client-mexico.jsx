import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-client-mexico');
}

export default function WithScreenshotsClientMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-client-mexico" />;
}
