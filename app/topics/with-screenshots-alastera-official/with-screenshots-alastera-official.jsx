import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-alastera-official');
}

export default function WithScreenshotsAlasteraOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-alastera-official" />;
}
