import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-client-france');
}

export default function WithScreenshotsClientFranceKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-client-france" />;
}
