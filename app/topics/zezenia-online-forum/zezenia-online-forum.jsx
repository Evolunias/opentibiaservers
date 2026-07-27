import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-forum');
}

export default function ZezeniaOnlineForumKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-forum" />;
}
