import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-forum');
}

export default function XanteriaForumKeywordPage() {
  return <StaticKeywordPage slug="xanteria-forum" />;
}
