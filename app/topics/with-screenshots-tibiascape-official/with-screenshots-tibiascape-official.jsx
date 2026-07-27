import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiascape-official');
}

export default function WithScreenshotsTibiascapeOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiascape-official" />;
}
