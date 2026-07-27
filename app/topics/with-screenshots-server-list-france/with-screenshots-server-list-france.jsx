import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-server-list-france');
}

export default function WithScreenshotsServerListFranceKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-server-list-france" />;
}
