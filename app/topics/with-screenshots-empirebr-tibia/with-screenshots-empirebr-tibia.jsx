import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-empirebr-tibia');
}

export default function WithScreenshotsEmpirebrTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-empirebr-tibia" />;
}
