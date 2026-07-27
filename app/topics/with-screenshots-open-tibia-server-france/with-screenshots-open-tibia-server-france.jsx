import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-open-tibia-server-france');
}

export default function WithScreenshotsOpenTibiaServerFranceKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-open-tibia-server-france" />;
}
