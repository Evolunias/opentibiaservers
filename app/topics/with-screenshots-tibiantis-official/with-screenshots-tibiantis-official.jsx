import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiantis-official');
}

export default function WithScreenshotsTibiantisOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiantis-official" />;
}
