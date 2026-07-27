import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-cyntara-ot');
}

export default function WithScreenshotsCyntaraOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-cyntara-ot" />;
}
