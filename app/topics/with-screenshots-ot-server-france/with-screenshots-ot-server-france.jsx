import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ot-server-france');
}

export default function WithScreenshotsOtServerFranceKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ot-server-france" />;
}
