import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolunia-online');
}

export default function WithScreenshotsEvoluniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolunia-online" />;
}
