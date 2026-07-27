import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-mist-of-death-server');
}

export default function WithScreenshotsMistOfDeathServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-mist-of-death-server" />;
}
