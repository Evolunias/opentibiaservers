import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-xanteria-official');
}

export default function WithScreenshotsXanteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-xanteria-official" />;
}
