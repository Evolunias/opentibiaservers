import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-empirebr-online');
}

export default function WithScreenshotsEmpirebrOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-empirebr-online" />;
}
