import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-forum');
}

export default function YurotsForumKeywordPage() {
  return <StaticKeywordPage slug="yurots-forum" />;
}
