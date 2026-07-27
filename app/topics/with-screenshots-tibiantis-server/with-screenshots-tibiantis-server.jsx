import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiantis-server');
}

export default function WithScreenshotsTibiantisServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiantis-server" />;
}
