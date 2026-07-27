import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-empirebr-forum');
}

export default function WithScreenshotsEmpirebrForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-empirebr-forum" />;
}
