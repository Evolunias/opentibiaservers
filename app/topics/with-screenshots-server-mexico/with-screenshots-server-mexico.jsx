import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-server-mexico');
}

export default function WithScreenshotsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-server-mexico" />;
}
