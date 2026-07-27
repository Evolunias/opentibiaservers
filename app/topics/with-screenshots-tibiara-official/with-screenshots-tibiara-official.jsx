import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiara-official');
}

export default function WithScreenshotsTibiaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiara-official" />;
}
