import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiantis-client');
}

export default function WithScreenshotsTibiantisClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiantis-client" />;
}
