import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiame-official');
}

export default function WithScreenshotsTibiameOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiame-official" />;
}
