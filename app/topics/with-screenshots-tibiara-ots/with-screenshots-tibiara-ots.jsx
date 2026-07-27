import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiara-ots');
}

export default function WithScreenshotsTibiaraOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiara-ots" />;
}
