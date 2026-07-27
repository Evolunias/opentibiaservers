import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-empirebr-open-tibia');
}

export default function WithScreenshotsEmpirebrOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-empirebr-open-tibia" />;
}
