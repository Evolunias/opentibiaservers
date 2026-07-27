import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-mist-of-death-client');
}

export default function WithScreenshotsMistOfDeathClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-mist-of-death-client" />;
}
