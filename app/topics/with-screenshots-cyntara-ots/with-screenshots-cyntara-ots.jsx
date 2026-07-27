import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-cyntara-ots');
}

export default function WithScreenshotsCyntaraOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-cyntara-ots" />;
}
