import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-rubinot-official');
}

export default function WithScreenshotsRubinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-rubinot-official" />;
}
