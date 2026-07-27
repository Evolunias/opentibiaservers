import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-cyntara-official');
}

export default function WithScreenshotsCyntaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-cyntara-official" />;
}
