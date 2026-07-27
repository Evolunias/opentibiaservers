import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-wiki-france');
}

export default function WithScreenshotsWikiFranceKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-wiki-france" />;
}
