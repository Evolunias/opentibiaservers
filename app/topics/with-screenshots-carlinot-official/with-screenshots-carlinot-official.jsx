import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-carlinot-official');
}

export default function WithScreenshotsCarlinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-carlinot-official" />;
}
