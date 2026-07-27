import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-oxygenot-official');
}

export default function WithScreenshotsOxygenotOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-oxygenot-official" />;
}
