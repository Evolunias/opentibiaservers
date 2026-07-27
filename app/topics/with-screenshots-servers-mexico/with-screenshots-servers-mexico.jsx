import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-servers-mexico');
}

export default function WithScreenshotsServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-servers-mexico" />;
}
