import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-aurera-global-official');
}

export default function WithScreenshotsAureraGlobalOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-aurera-global-official" />;
}
