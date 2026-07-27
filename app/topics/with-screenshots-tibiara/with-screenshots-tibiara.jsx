import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiara');
}

export default function WithScreenshotsTibiaraKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiara" />;
}
